import { mount } from "@vue/test-utils";
import Home from "./Home.vue";
import { describe, expect, test,it } from "vitest";

describe("Home.vue", () => {
    
    test("Home the correct style for error", () => {
        const wrapper = mount(Home);
    });
   
});