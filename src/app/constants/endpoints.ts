import {environment} from '../../environments/environment';

const apiUrl = environment.apiUrl + '/api/';

export const endpoints = {
    customers: apiUrl + 'Customers/GetCustomers',
};