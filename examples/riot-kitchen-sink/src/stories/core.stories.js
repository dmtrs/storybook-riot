///import { tag, mount, addParameters } from '@storybook/riot';
import { component } from 'riot';
import Parameters from './Parameters.riot';

const chapterParameter = 'chapterParameter';
const storyParameter = 'storyParameter';

export default {
  title: 'Core/Parameters',
  parameters: {
    chapterParameter,
  },
};

export const PassedToStory = ({ parameters: { fileName, ...parameters } }) => ({
  component: Parameters,
  props: { ...parameters, storyParameter }
});

PassedToStory.story = {
  name: 'passed to story',
};
