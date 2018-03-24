import React from 'react';
import TestRenderer from 'react-test-renderer';
import GroceryList from '../components/GroceryList';

describe('#_organizeListByCategories', () => {

  describe('initialization', () => {
    let component = new GroceryList({ groceryList: [] });
    const listByCategories = component._organizeListByCategories();

    it('has a "Uncatogorized" category', () => {
      expect(Object.keys(listByCategories)).toContain("Uncategorized");
      expect(listByCategories["Uncategorized"]).toBeInstanceOf(Array)
    });

    it('has a "Crossed Out" category', () => {
      expect(Object.keys(listByCategories)).toContain("Crossed Out");
      expect(listByCategories["Crossed Out"]).toBeInstanceOf(Array)
    });
  });

  describe('uncatagorized sorting', () => {
    it('puts items with no category in "Uncategorized"', () => {
      const uncategorizedItem = { category: null };
      let component = new GroceryList({ groceryList: [uncategorizedItem] });

      const sortedList = component._organizeListByCategories();
      expect(sortedList['Uncategorized']).toContain(uncategorizedItem);
    });
  });

  describe('crossed-off item sorting', () => {
    it('puts crossed-off items in "Crossed Out"', () => {
      const crossedOffItem = { purchased: true };
      let component = new GroceryList({ groceryList: [crossedOffItem] });
      const sortedList = component._organizeListByCategories();

      expect(sortedList['Crossed Out']).toContain(crossedOffItem);
    });
  });
  describe('uncategorized, crossed-off items', () => {
    it('always puts them in "Crossed Out"', () => {
      const uncategorizedCrossedOffItem = { category: null, purchased: true };
      let component = new GroceryList({
        groceryList: [uncategorizedCrossedOffItem]
      });

      const sortedList = component._organizeListByCategories();
      expect(sortedList['Uncategorized'])
        .not
        .toContain(uncategorizedCrossedOffItem);

      expect(sortedList['Crossed Out'])
        .toContain(uncategorizedCrossedOffItem)
    });
  });

  describe('sorted list does not have a category for an item', () => {
    const categorizedItem = { category: 'Pet supplies' };
    let component = new GroceryList({groceryList: [categorizedItem]});
    const sortedList = component._organizeListByCategories();

    it('creates a category for the item', () => {
      expect(Object.keys(sortedList)).toContain('Pet supplies');
    });

    it('item is sorted to list with that heading', () => {
      expect(sortedList['Pet supplies']).toContain(categorizedItem);
    });
  });

  describe('sorted list category exists', () => {
    it('item is sorted to list with that heading', () => {
      const categorizedItem = { name: 'cat food', category: 'Pet supplies' };
      const anotherCategorizedItem = { name: 'cat toy', category: 'Pet supplies'};
      let component = new GroceryList({
        groceryList: [categorizedItem, anotherCategorizedItem]
      });

      const sortedList = component._organizeListByCategories();
      expect(sortedList['Pet supplies'])
        .toEqual([categorizedItem, anotherCategorizedItem])
    });
  });

});

