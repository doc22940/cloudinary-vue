import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo/CldVideo.vue";
import { sourcesOfVideo } from "./sourcesOfVideo";

describe("CldVideo", () => {
  it("should render a video without sources if publicId is not defined", async () => {
    const wrapper = mount({
      template: `
        <cld-video cloudName="demo" publicId="" />
      `,
      components: { CldVideo }
    });

    const video = wrapper.find('video');

    expect(video.is("video")).toBe(true);
    expect(sourcesOfVideo(video)).toEqual({});
  });
});
