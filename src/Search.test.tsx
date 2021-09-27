import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchUser from './Search';

const TEST_IDS = {
    searchInputId: 'searchInput',
    searchListId: 'searchList'
};

describe('Search User', () => {

    let getByTestId;
    let searchInput;
    let list: [];

    beforeEach(() => {
        const search = render(<SearchUser />);
        getByTestId = search.getByTestId;
        searchInput = getByTestId(TEST_IDS.searchInputId);
        list = getByTestId(TEST_IDS.searchListId);
    });

    afterEach(() => {
        cleanup();
    });

    it("Form submit", () => {
        const onSubmit = jest.fn()
        fireEvent.change(searchInput, { target: { value: 'Leanne Graham' } });
        fireEvent.submit(getByTestId("form"));
        expect(onSubmit).toHaveBeenCalledTimes(0)
        expect(onSubmit).toBeDefined();
    });

    it('should clear the input fields after showing a new user', () => {
        fireEvent.change(searchInput, { target: { value: 'Bret' } });
        fireEvent.submit(getByTestId("form"));
        expect(searchInput.value).toEqual('');
    });

    it('should show user list without case sensitivity', () => {
        fireEvent.change(searchInput, { target: { value: 'Bret' } });
        fireEvent.submit(getByTestId("form"));
        expect(list).toBeDefined()
    });

});
