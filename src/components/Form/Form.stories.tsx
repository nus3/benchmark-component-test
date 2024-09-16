import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { args, playSubmitForm } from "./storyHelpers";

const meta: Meta = {
  component: Form,
};

export default meta;

// satisfiesだとうまく型補完されなかった、かなP
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args,
  tags: ["no-test"],
};

const TEST_COUNT = 50;

const testStories: { [key: string]: Story } = {};
for (let i = 1; i <= TEST_COUNT; i++) {
  testStories[`Test${i}`] = {
    args,
    play: async ({ args, canvasElement }) => {
      await playSubmitForm(canvasElement, args, i);
    },
  };
}

// 以下のような方式でテストケースを50個exportする
export const Test1 = testStories.Test1;
export const Test2 = testStories.Test2;
export const Test3 = testStories.Test3;
export const Test4 = testStories.Test4;
export const Test5 = testStories.Test5;
export const Test6 = testStories.Test6;
export const Test7 = testStories.Test7;
export const Test8 = testStories.Test8;
export const Test9 = testStories.Test9;
export const Test10 = testStories.Test10;
export const Test11 = testStories.Test11;
export const Test12 = testStories.Test12;
export const Test13 = testStories.Test13;
export const Test14 = testStories.Test14;
export const Test15 = testStories.Test15;
export const Test16 = testStories.Test16;
export const Test17 = testStories.Test17;
export const Test18 = testStories.Test18;
export const Test19 = testStories.Test19;
export const Test20 = testStories.Test20;
export const Test21 = testStories.Test21;
export const Test22 = testStories.Test22;
export const Test23 = testStories.Test23;
export const Test24 = testStories.Test24;
export const Test25 = testStories.Test25;
export const Test26 = testStories.Test26;
export const Test27 = testStories.Test27;
export const Test28 = testStories.Test28;
export const Test29 = testStories.Test29;
export const Test30 = testStories.Test30;
export const Test31 = testStories.Test31;
export const Test32 = testStories.Test32;
export const Test33 = testStories.Test33;
export const Test34 = testStories.Test34;
export const Test35 = testStories.Test35;
export const Test36 = testStories.Test36;
export const Test37 = testStories.Test37;
export const Test38 = testStories.Test38;
export const Test39 = testStories.Test39;
export const Test40 = testStories.Test40;
export const Test41 = testStories.Test41;
export const Test42 = testStories.Test42;
export const Test43 = testStories.Test43;
export const Test44 = testStories.Test44;
export const Test45 = testStories.Test45;
export const Test46 = testStories.Test46;
export const Test47 = testStories.Test47;
export const Test48 = testStories.Test48;
export const Test49 = testStories.Test49;
export const Test50 = testStories.Test50;
