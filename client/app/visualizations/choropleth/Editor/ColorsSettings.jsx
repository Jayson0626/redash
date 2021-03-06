import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Select from 'antd/lib/select';
import InputNumber from 'antd/lib/input-number';
import * as Grid from 'antd/lib/grid';
import ColorPicker from '@/components/ColorPicker';
import { EditorPropTypes } from '@/visualizations';
import ColorPalette from '../ColorPalette';

export default function ColorsSettings({ options, onOptionsChange }) {
  const [onOptionsChangeDebounced] = useDebouncedCallback(onOptionsChange, 200);

  return (
    <React.Fragment>
      <Grid.Row type="flex" align="middle" className="m-b-15">
        <Grid.Col span={12}>
          <label htmlFor="choropleth-editor-clustering-mode">Clustering mode</label>
        </Grid.Col>
        <Grid.Col span={12}>
          <Select
            id="choropleth-editor-clustering-mode"
            className="w-100"
            data-test="Choropleth.Editor.ClusteringMode"
            defaultValue={options.clusteringMode}
            onChange={clusteringMode => onOptionsChange({ clusteringMode })}
          >
            <Select.Option value="q" data-test="Choropleth.Editor.ClusteringMode.q">quantile</Select.Option>
            <Select.Option value="e" data-test="Choropleth.Editor.ClusteringMode.e">equidistant</Select.Option>
            <Select.Option value="k" data-test="Choropleth.Editor.ClusteringMode.k">k-means</Select.Option>
          </Select>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row type="flex" align="middle" className="m-b-15">
        <Grid.Col span={12}>
          <label htmlFor="choropleth-editor-color-steps">Steps</label>
        </Grid.Col>
        <Grid.Col span={12}>
          <InputNumber
            id="choropleth-editor-color-steps"
            className="w-100"
            data-test="Choropleth.Editor.ColorSteps"
            min={3}
            max={11}
            defaultValue={options.steps}
            onChange={steps => onOptionsChangeDebounced({ steps })}
          />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row type="flex" align="middle" className="m-b-15">
        <Grid.Col span={12}>
          <label htmlFor="choropleth-editor-color-min">Min Color</label>
        </Grid.Col>
        <Grid.Col span={12}>
          <ColorPicker
            id="choropleth-editor-color-min"
            data-test="Choropleth.Editor.Colors.Min"
            interactive
            presetColors={ColorPalette}
            placement="topRight"
            color={options.colors.min}
            onChange={min => onOptionsChange({ colors: { min } })}
          />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row type="flex" align="middle" className="m-b-15">
        <Grid.Col span={12}>
          <label htmlFor="choropleth-editor-color-max">Max Color</label>
        </Grid.Col>
        <Grid.Col span={12}>
          <ColorPicker
            id="choropleth-editor-color-max"
            data-test="Choropleth.Editor.Colors.Max"
            interactive
            presetColors={ColorPalette}
            placement="topRight"
            color={options.colors.max}
            onChange={max => onOptionsChange({ colors: { max } })}
          />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row type="flex" align="middle" className="m-b-15">
        <Grid.Col span={12}>
          <label htmlFor="choropleth-editor-color-no-value">No value color</label>
        </Grid.Col>
        <Grid.Col span={12}>
          <ColorPicker
            id="choropleth-editor-color-no-value"
            data-test="Choropleth.Editor.Colors.NoValue"
            interactive
            presetColors={ColorPalette}
            placement="topRight"
            color={options.colors.noValue}
            onChange={noValue => onOptionsChange({ colors: { noValue } })}
          />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row type="flex" align="middle" className="m-b-15">
        <Grid.Col span={12}>
          <label htmlFor="choropleth-editor-color-background">Background color</label>
        </Grid.Col>
        <Grid.Col span={12}>
          <ColorPicker
            id="choropleth-editor-color-background"
            data-test="Choropleth.Editor.Colors.Background"
            interactive
            presetColors={ColorPalette}
            placement="topRight"
            color={options.colors.background}
            onChange={background => onOptionsChange({ colors: { background } })}
          />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row type="flex" align="middle" className="m-b-15">
        <Grid.Col span={12}>
          <label htmlFor="choropleth-editor-color-borders">Borders color</label>
        </Grid.Col>
        <Grid.Col span={12}>
          <ColorPicker
            id="choropleth-editor-color-borders"
            data-test="Choropleth.Editor.Colors.Borders"
            interactive
            presetColors={ColorPalette}
            placement="topRight"
            color={options.colors.borders}
            onChange={borders => onOptionsChange({ colors: { borders } })}
          />
        </Grid.Col>
      </Grid.Row>
    </React.Fragment>
  );
}

ColorsSettings.propTypes = EditorPropTypes;
