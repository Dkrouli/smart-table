import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
const comparator = createComparison(rules.skipEmptyTargetValues);
  
    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор

        return data.filter(row => comparator(row, state));
    }
}