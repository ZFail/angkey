import {Model, model, modelAction, prop} from 'mobx-keystone'

@model('LatLonModel')
export class LatLonModel extends Model({
    lat: prop<number>(),
    lon: prop<number>(),
}) {
    @modelAction
    set(lat: number, lon: number) {
        this.lat = lat
        this.lon = lon
    }
}
