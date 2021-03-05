import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import {
    DataGrid,
    getGridNumericColumnOperators,
    GridPreferencePanelsValue,
} from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

const useStyles = makeStyles({
    root: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingLeft: 20,
    },
});

function RatingInputValue(props) {
    const classes = useStyles();
    const { item, applyValue } = props;

    const handleFilterChange = (event) => {
        applyValue({ ...item, value: event.target.value });
    };

    return (
        <div className={classes.root}>
            <Rating
                name="custom-rating-filter-operator"
                placeholder="Filter value"
                value={Number(item.value)}
                onChange={handleFilterChange}
                precision={0.5}
            />
        </div>
    );
}

RatingInputValue.propTypes = {
    applyValue: PropTypes.func.isRequired,
    item: PropTypes.shape({
        columnField: PropTypes.string,
        id: PropTypes.number,
        operatorValue: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
};

const filterModel = {
    items: [{ columnField: 'rating', value: '3.5', operatorValue: '>=' }],
};

export default function TestDataGrid(props) {

    const columns = ["userId", "firstName", "lastName", "username", "email", "role", "supervisor"];

    if (columns.length > 0) {
        const ratingColumn = columns.find((column) => column.field === 'rating');
        const ratingColIndex = columns.findIndex((col) => col.field === 'rating');

        const ratingFilterOperators = getGridNumericColumnOperators().map(
            (operator) => ({
                ...operator,
                InputComponent: RatingInputValue,
            }),
        );

        columns[ratingColIndex] = {
            ...ratingColumn,
            filterOperators: ratingFilterOperators,
        };
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.users}
                columns={columns}
                filterModel={filterModel}
                state={{
                    preferencePanel: {
                        open: true,
                        openedPanelValue: GridPreferencePanelsValue.filters,
                    },
                }}
            />
        </div>
    );
}
