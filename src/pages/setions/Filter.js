import React, { useContext } from 'react';
import { Select, Input, Button } from 'antd';
import { ModeContext } from '../../contexts/ModeContext';

export default function Filter({ selectedCategory, setSelectedCategory }) {
    const { searchKey, setSearchKey, filterPrice, setFilterPrice } = useContext(ModeContext);

    const handleResetFilters = () => {
        setSearchKey('');
        setSelectedCategory('');
        setFilterPrice('');
    };

    return (
        <div>
            <Input
                placeholder="Search Your Favourite Item"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                style={{ marginBottom: '16px' }}
            />
            <Select
                size='large'
                showSearch
                placeholder="Select a Item category"
                optionFilterProp="label"
                value={selectedCategory}
                onChange={setSelectedCategory}
                style={{ marginBottom: '16px' }}
                options={[
                    { value: 'lunch', label: 'lunch' },
                    { value: 'dinner', label: 'dinner' },
                    { value: 'coffee', label: 'coffee' },
                ]}
            />
            <Select
                size='large'
                placeholder="Filter by price"
                value={filterPrice}
                onChange={setFilterPrice}
                style={{ marginBottom: '16px', width: '100%' }}
                options={[
                    { value: '0-20', label: '$0 - $20' },
                    { value: '20-40', label: '$20 - $40' },
                    { value: '40-70', label: '$40 - $70' },
                    { value: '100+', label: '$100+' },
                ]}
            />
            <Button type="primary" onClick={handleResetFilters}>
                Reset Filters
            </Button>
        </div>
    );
}



