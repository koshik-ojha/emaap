import React from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomButton from '../CustomButton/CustomButton';

export interface FilterConfig {
  key: string;
  label: string;
  placeholder?: string;
  options: { label: string; value: string }[];
}

interface FilterPanelProps {
  show: boolean;
  filters: FilterConfig[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onClear: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ show, filters, values, onChange, onClear }) => {
  if (!show) return null;

  return (
    <div className="filter-dropdown-panel border rounded p-3 mb-3 bg-light">
      <div className="row g-3 align-items-end">
        {filters.map((filter) => (
          <div className="col-md-3" key={filter.key}>
            <CustomSelect
              label={filter.label}
              placeholder={filter.placeholder ?? `All ${filter.label}`}
              options={filter.options}
              value={values[filter.key] ?? ''}
              onChange={(e) => onChange(filter.key, e.target.value)}
            />
          </div>
        ))}
        <div className="col-md-2">
          <CustomButton variant="secondary" onClick={onClear} className="w-auto m-0">
            Clear Filters
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
