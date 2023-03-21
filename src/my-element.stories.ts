import { html } from 'lit';

const meta = {
  title: 'MyElement',
  component: 'my-element',
  argTypes: {
    docsHint: {control: 'text'},
    count: {control: 'number'}
  }
};
export default meta;

export const Primary = {
  render: ({docsHint, count}: {docsHint: string, count: number}) => html`
    <my-element docsHint=${docsHint} count=${count}></my-element>`,
  args: {
    docsHint: "hello",
    count: 20
  }
};
