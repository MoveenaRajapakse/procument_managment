import React from 'react';
import {shallow} from 'enzyme';
import OrderManagement from "../components/Warehouse/OrderManagement";

describe('OrderManagement Component' , () => {
    it('should render without throwing an error' , () => {
        expect(shallow(<OrderManagement/>).find('form').exists()).toBe(true)
    })

    it('should render orderID' , ()=> {
        expect(shallow(<OrderManagement/>).find('#order_id').length).toEqual(1)
    })

    it('should render supplier' , ()=> {
        expect(shallow(<OrderManagement/>).find('#sup').length).toEqual(1)
    })

    it('should render materiel' , ()=> {
        expect(shallow(<OrderManagement/>).find('#materiel').length).toEqual(1)
    })

    it('should render quantity' , ()=> {
        expect(shallow(<OrderManagement/>).find('#qty').length).toEqual(1)
    })

    it('should render free wareHouses' , ()=> {
        expect(shallow(<OrderManagement/>).find('#inputState').length).toEqual(1)
    })

})
