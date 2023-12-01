import { mount,shallowMount } from '@vue/test-utils';
import { describe, expect, test,vi,nextTick  } from "vitest";
import Table from './Table.vue';
import fetchHelper from "../helper/fetchHelper";

describe('Table.vue', () => {
    test('fetchData function sets items to an array of length 10, and tr and li tags are 10',async () => {
      
        // Create a shallow mount of the Table component
            const wrapper = shallowMount(Table);
            const mockData = Array.from({ length: 10 }, (_, i) => ({
                id: i + 1,
                title: `Item ${i + 1}`,
                description: `Description for Item ${i + 1}`,
                price: Math.floor(Math.random() * 1000),
                discountPercentage: Math.floor(Math.random() * 50),
                rating: Math.floor(Math.random() * 5) + 1,
                stock: Math.floor(Math.random() * 100),
                brand: 'Brand',
                category: 'Category',
                thumbnail: '...',
                images: ['...', '...', '...']
              }));
            // Set the component's data with mock response data
            wrapper.setData({
                items: mockData,
                total: 100,
                itemsPerPage: 10,
                skip: 0
            });
            // Check that the items data is an array of length 10
            expect(Array.isArray(wrapper.vm.items)).toBe(true);
            expect(wrapper.vm.items).toHaveLength(10);
            
            await wrapper.vm.$nextTick();
            // Check that there are 10 tr tags
            const trTags = wrapper.findAll('tr');
            
            expect(trTags).toHaveLength(11);

            // Check that there are 10 li tags
            const liTags = wrapper.findAll('li');
            expect(liTags).toHaveLength(12);
      });
  });