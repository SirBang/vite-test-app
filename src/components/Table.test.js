import { mount } from "@vue/test-utils";
import Table from "./Table.vue";
import { describe, expect, test,it } from "vitest";

describe("Table.vue", () => {
    
    test("Table the correct style for error", () => {
        const wrapper = mount(Table);
    });
   
});
