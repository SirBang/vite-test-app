import { mount } from "@vue/test-utils";
import Home from "./Home.vue";
import { describe, expect, test } from "vitest";

describe("Home.vue", () => {
    test("renders the correct style for error", () => {
        const type = "error";
        const wrapper = mount(Home, {
            props: { type },
        });
    });
});