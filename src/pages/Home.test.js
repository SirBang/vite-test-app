import { mount } from "@vue/test-utils";
import Home from "./Home.vue";
import { describe, expect, test,it } from "vitest";

describe("Home.vue", () => {
    
    test("Home the correct style for error",async () => {
        const wrapper = mount(Home);
        await wrapper.vm.$nextTick();
        // expect(wrapper.findAll("tr")).toHaveLength(10);
    });
   
});