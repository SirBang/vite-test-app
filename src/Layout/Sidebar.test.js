import { mount } from "@vue/test-utils";
import Sidebar from "./Sidebar.vue";
import { describe, expect, test,it } from "vitest";

describe("Sidebar.vue", () => {
    
    test("Sidebar the correct style for error", () => {
        const wrapper = mount(Sidebar);
    });
   
});
