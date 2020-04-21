import { Map, View } from 'ol';
import { OSM, XYZ } from 'ol/source'
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj'

window.onload = () => {
	const map = new Map({
		target: 'map',
		layers: [
			new TileLayer({
				source: new OSM(),
				// title: "OSMStandard",
				title: "OSMHumanitarian",
			}),
		],
		view: new View({
			center: fromLonLat([
				-7.9811,
				31.6295,
			]),
			zoom: 5,
			maxZoom: 20,
			minZoom: 1,
		}),
	})

}