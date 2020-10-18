import React from 'react';
import {shallow} from 'enzyme';
import PurchaseRequisitions from "../components/PurchaseReq/PurchaseRequisitions";

describe('PurchaseRequisitions Component' , () => {
    it('should render without throwing an error' , () => {
        expect(shallow(<PurchaseRequisitions/>).find('form').exists()).toBe(true)
    })

    it('should render orderID' , ()=> {
        expect(shallow(<PurchaseRequisitions/>).find('#order_id').length).toEqual(1)
    })

    it('should render supplier' , ()=> {
        expect(shallow(<PurchaseRequisitions/>).find('#supplier').length).toEqual(1)
    })

    it('should render delivery date' , ()=> {
        expect(shallow(<PurchaseRequisitions/>).find('#date').length).toEqual(1)
    })

    it('should render delivery address' , ()=> {
        expect(shallow(<PurchaseRequisitions/>).find('#address').length).toEqual(1)
    })

    it('should render materiel' , ()=> {
        expect(shallow(<PurchaseRequisitions/>).find('#materiel').length).toEqual(1)
    })

    it('should render quantity' , ()=> {
        expect(shallow(<PurchaseRequisitions/>).find('#quantity').length).toEqual(1)
    })

    it('should render total' , ()=> {
        expect(shallow(<PurchaseRequisitions/>).find('#total').length).toEqual(1)
    })

})