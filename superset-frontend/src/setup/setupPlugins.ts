/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { getChartControlPanelRegistry } from '@superset-ui/chart';
import MainPreset from '../visualizations/presets/MainPreset';
import setupPluginsExtra from './setupPluginsExtra';

import CountryMap from '../explore/controlPanels/CountryMap';
import DeckArc from '../explore/controlPanels/DeckArc';
import DeckGeojson from '../explore/controlPanels/DeckGeojson';
import DeckGrid from '../explore/controlPanels/DeckGrid';
import DeckHex from '../explore/controlPanels/DeckHex';
import DeckMulti from '../explore/controlPanels/DeckMulti';
import DeckPath from '../explore/controlPanels/DeckPath';
import DeckPolygon from '../explore/controlPanels/DeckPolygon';
import DeckScatter from '../explore/controlPanels/DeckScatter';
import DeckScreengrid from '../explore/controlPanels/DeckScreengrid';
import DirectedForce from '../explore/controlPanels/DirectedForce';
import EventFlow from '../explore/controlPanels/EventFlow';
import FilterBox from '../explore/controlPanels/FilterBox';
import Heatmap from '../explore/controlPanels/Heatmap';
import Histogram from '../explore/controlPanels/Histogram';
import Horizon from '../explore/controlPanels/Horizon';
import Iframe from '../explore/controlPanels/Iframe';
import Mapbox from '../explore/controlPanels/Mapbox';
import PairedTtest from '../explore/controlPanels/PairedTtest';
import Para from '../explore/controlPanels/Para';
import Separator from '../explore/controlPanels/Separator';
import Table from '../explore/controlPanels/Table';
import TimeTable from '../explore/controlPanels/TimeTable';

export default function setupPlugins() {
  new MainPreset().register();

  // TODO: Remove these shims once the control panel configs are moved into the plugin package.
  getChartControlPanelRegistry()
    .registerValue('country_map', CountryMap)
    .registerValue('directed_force', DirectedForce)
    .registerValue('event_flow', EventFlow)
    .registerValue('filter_box', FilterBox)
    .registerValue('heatmap', Heatmap)
    .registerValue('histogram', Histogram)
    .registerValue('horizon', Horizon)
    .registerValue('iframe', Iframe)
    .registerValue('mapbox', Mapbox)
    .registerValue('paired_ttest', PairedTtest)
    .registerValue('para', Para)
    .registerValue('separator', Separator)
    .registerValue('table', Table)
    .registerValue('time_table', TimeTable)
    .registerValue('deck_arc', DeckArc)
    .registerValue('deck_geojson', DeckGeojson)
    .registerValue('deck_grid', DeckGrid)
    .registerValue('deck_hex', DeckHex)
    .registerValue('deck_multi', DeckMulti)
    .registerValue('deck_path', DeckPath)
    .registerValue('deck_polygon', DeckPolygon)
    .registerValue('deck_scatter', DeckScatter)
    .registerValue('deck_screengrid', DeckScreengrid);

  setupPluginsExtra();
}
