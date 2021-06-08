import React from 'react';
import PokemonDetails, {Stats} from './PokemonDetails';
import renderer from 'react-test-renderer';

const mockPockemon = {
  height: 5,
  id: 5,
  sprites: {
    front_default: '',
  },
  types: {
    type: {
      name: 'fire',
    },
  },
  abilities: [
    {
      ability: {
        name: 'overgrow',
      },
    },
  ],
  stats: [
    {
      stat: {
        name: 'hp',
      },
      base_stat: 54,
    },
  ],
};

it('renders correctly', () => {
  const tree = renderer.create(
    <PokemonDetails pokemon={mockPockemon} pokemonType={'fire'} />,
  );
  expect(tree).toMatchSnapshot();
});

it('should not render if isExpanded is false', () => {
  const testRenderer = renderer.create(
    <PokemonDetails
      isExpanded={false}
      pockemon={mockPockemon}
      pockemonType={'fire'}
    />,
  );
  const testInstance = testRenderer.root;
  expect(testInstance.children.length).toBe(0);
});

it('should render a list of bars showing abilities', function () {
  const testRenderer = renderer.create(
    <PokemonDetails
      isExpanded={true}
      pockemon={mockPockemon}
      pockemonType={'fire'}
    />,
  );
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(Stats).children.length).toBeGreaterThan(0);
});
