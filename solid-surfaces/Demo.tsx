import { Component, createSignal } from 'solid-js'
import 'surface-fonts'

import '../common/global.sass'

import Button from './components/Button'
import { Grid, GridItem } from './components/Grid'
import Input from './components/Input'
import Table from './components/Table'
import { Header, Subheader, ContrastHeader, GutterHeader } from './components/typo/Header'

import styles from './demo.module.sass'

const Demo: Component = () => {
  const [count, setCount] = createSignal(0)

  return (
    <main class={styles.main}>
      <Subheader>Subheader</Subheader>
      <Header>Header</Header>
      <Grid>
        <GridItem rows={0}>
          <GutterHeader>gutter</GutterHeader>
        </GridItem>
        <GridItem class={styles['good-morning']} columns={2}>
          Good Morning
          <ContrastHeader>solid-surfaces</ContrastHeader>
        </GridItem>
        <Button onClick={() => setCount((count) => count + 1)}>count is: {count()}</Button>
        <Input />
        <GridItem columns={0}>
          <Table
            columns={[
              { key: 'id', name: 'ID' },
              { key: 'value', name: 'Value' },
              { key: 'text', name: 'Text' },
            ]}
            data={[
              {
                id: 'LRM88WMB3RF',
                value: 3,
                text: 'eleifend vitae, erat. Vivamus nisi. Mauris',
              },
              {
                id: 'RVS14KSU8BO',
                value: 17,
                text: 'viverra. Donec tempus, lorem fringilla ornare',
              },
              {
                id: 'JGI05COT1UL',
                value: 11,
                text: 'semper rutrum. Fusce dolor quam, elementum',
              },
              {
                id: 'SFQ17TAU4PQ',
                value: 13,
                text: 'eu, ultrices sit amet, risus. Donec',
              },
              {
                id: 'DDR85SNH3PN',
                value: 11,
                text: 'neque. Nullam ut nisi a odio',
              },
              {
                id: 'BIG62QVD4QQ',
                value: 5,
                text: 'ac turpis egestas. Aliquam fringilla cursus',
              },
              {
                id: 'LLX88UIF7KB',
                value: 15,
                text: 'non, lacinia at, iaculis quis, pede.',
              },
              {
                id: 'JEU19YJD3VI',
                value: 9,
                text: 'pede, malesuada vel, venenatis vel, faucibus',
              },
              {
                id: 'YVH89HVF6GS',
                value: 5,
                text: 'non, egestas a, dui. Cras pellentesque.',
              },
              {
                id: 'KCR23NRF6LP',
                value: 9,
                text: 'est mauris, rhoncus id, mollis nec,',
              },
              {
                id: 'BKJ34LYB2YB',
                value: 5,
                text: 'odio, auctor vitae, aliquet nec, imperdiet',
              },
              {
                id: 'MPT03UZL4JH',
                value: 7,
                text: 'mattis velit justo nec ante. Maecenas',
              },
              {
                id: 'YPU12PQD8DW',
                value: 3,
                text: 'Cum sociis natoque penatibus et magnis',
              },
              {
                id: 'EAY43OGI7VW',
                value: 7,
                text: 'aliquet diam. Sed diam lorem, auctor',
              },
              {
                id: 'WRL40NLC6RT',
                value: 3,
                text: 'vehicula aliquet libero. Integer in magna.',
              },
              {
                id: 'OFE14BTU5IF',
                value: 11,
                text: 'ornare. Fusce mollis. Duis sit amet',
              },
              {
                id: 'UQK36BCO6IW',
                value: 1,
                text: 'pharetra sed, hendrerit a, arcu. Sed',
              },
              {
                id: 'ZWI87VSZ8IJ',
                value: 9,
                text: 'elit pede, malesuada vel, venenatis vel,',
              },
              {
                id: 'NGR94EVH1HS',
                value: 19,
                text: 'Duis ac arcu. Nunc mauris. Morbi',
              },
              {
                id: 'QOV62SJP7OL',
                value: 17,
                text: 'nonummy ac, feugiat non, lobortis quis,',
              },
              {
                id: 'EMB11OQW7TE',
                value: 1,
                text: 'nisi a odio semper cursus. Integer',
              },
              {
                id: 'PRJ43VVV6YQ',
                value: 3,
                text: 'vitae, aliquet nec, imperdiet nec, leo.',
              },
              {
                id: 'BNU73HVC1CK',
                value: 7,
                text: 'a, arcu. Sed et libero. Proin',
              },
              {
                id: 'YJP20SLH3LF',
                value: 7,
                text: 'eu, ligula. Aenean euismod mauris eu',
              },
              {
                id: 'TUG40DTR1UW',
                value: 3,
                text: 'pulvinar arcu et pede. Nunc sed',
              },
              {
                id: 'QBN37YDN7KL',
                value: 7,
                text: 'Nam tempor diam dictum sapien. Aenean',
              },
              {
                id: 'QAS25KLK9TO',
                value: 5,
                text: 'Vivamus nibh dolor, nonummy ac, feugiat',
              },
              {
                id: 'TQQ73ICY5MG',
                value: 1,
                text: 'magna. Duis dignissim tempor arcu. Vestibulum',
              },
              {
                id: 'ROQ57AVG4NL',
                value: 5,
                text: 'ultricies ornare, elit elit fermentum risus,',
              },
              {
                id: 'JNR09RUO7CL',
                value: 9,
                text: 'Phasellus at augue id ante dictum',
              },
              {
                id: 'MOU61PBO3HE',
                value: 9,
                text: 'ligula. Nullam enim. Sed nulla ante,',
              },
              {
                id: 'KOY81LYV4OG',
                value: 13,
                text: 'ornare, libero at auctor ullamcorper, nisl',
              },
              {
                id: 'QGN83TGY2US',
                value: 17,
                text: 'a tortor. Nunc commodo auctor velit.',
              },
              {
                id: 'JGQ83VVS6YE',
                value: 11,
                text: 'purus sapien, gravida non, sollicitudin a,',
              },
              {
                id: 'BPN51UWJ7SV',
                value: 5,
                text: 'Quisque tincidunt pede ac urna. Ut',
              },
              {
                id: 'GHG38CEV6SH',
                value: 17,
                text: 'Nunc ut erat. Sed nunc est,',
              },
              {
                id: 'DST74VVX3LZ',
                value: 11,
                text: 'vel, venenatis vel, faucibus id, libero.',
              },
              {
                id: 'BFG16WEP8MJ',
                value: 9,
                text: 'lorem, luctus ut, pellentesque eget, dictum',
              },
              {
                id: 'VLS56VYS1ZB',
                value: 7,
                text: 'justo. Proin non massa non ante',
              },
              {
                id: 'VJY36YHR3JR',
                value: 9,
                text: 'Sed pharetra, felis eget varius ultrices,',
              },
              {
                id: 'VQQ55YZL4WT',
                value: 11,
                text: 'Nunc commodo auctor velit. Aliquam nisl.',
              },
              {
                id: 'PVH54SIV8ZD',
                value: 7,
                text: 'egestas nunc sed libero. Proin sed',
              },
              {
                id: 'PRL67ZLC5RR',
                value: 17,
                text: 'velit. Pellentesque ultricies dignissim lacus. Aliquam',
              },
              {
                id: 'FYQ51SNW5RQ',
                value: 1,
                text: 'lobortis. Class aptent taciti sociosqu ad',
              },
              {
                id: 'QEL59OOV4CW',
                value: 15,
                text: 'turpis egestas. Aliquam fringilla cursus purus.',
              },
              {
                id: 'FNU57MTL7SV',
                value: 7,
                text: 'malesuada fringilla est. Mauris eu turpis.',
              },
              {
                id: 'MFW78XVK2YI',
                value: 19,
                text: 'purus ac tellus. Suspendisse sed dolor.',
              },
              {
                id: 'VDL17FQH6IJ',
                value: 5,
                text: 'mollis. Duis sit amet diam eu',
              },
              {
                id: 'OHF15ZWM1CU',
                value: 19,
                text: 'amet orci. Ut sagittis lobortis mauris.',
              },
              {
                id: 'MDY85SIK6DY',
                value: 7,
                text: 'blandit at, nisi. Cum sociis natoque',
              },
              {
                id: 'NWP92IMU9RX',
                value: 9,
                text: 'in molestie tortor nibh sit amet',
              },
              {
                id: 'INX86XIW4BV',
                value: 9,
                text: 'mi eleifend egestas. Sed pharetra, felis',
              },
              {
                id: 'YAX19XIP7VE',
                value: 17,
                text: 'nisl elementum purus, accumsan interdum libero',
              },
              {
                id: 'EEM78AED7FB',
                value: 9,
                text: 'Aliquam fringilla cursus purus. Nullam scelerisque',
              },
              {
                id: 'RCN15WQP3LG',
                value: 5,
                text: 'Quisque ac libero nec ligula consectetuer',
              },
              {
                id: 'BMZ53KVO6IE',
                value: 13,
                text: 'porta elit, a feugiat tellus lorem',
              },
              {
                id: 'PPG59WDW2QG',
                value: 15,
                text: 'augue scelerisque mollis. Phasellus libero mauris,',
              },
              {
                id: 'SZQ16RPO1GI',
                value: 5,
                text: 'sit amet ante. Vivamus non lorem',
              },
              {
                id: 'BDG97FDP0XU',
                value: 11,
                text: 'mi enim, condimentum eget, volutpat ornare,',
              },
              {
                id: 'CHM39RTV1NW',
                value: 15,
                text: 'nec tellus. Nunc lectus pede, ultrices',
              },
              {
                id: 'DGQ78WNH8WQ',
                value: 3,
                text: 'Phasellus in felis. Nulla tempor augue',
              },
              {
                id: 'HNY55PBK2CQ',
                value: 13,
                text: 'vulputate dui, nec tempus mauris erat',
              },
              {
                id: 'JSQ82MGO3HX',
                value: 1,
                text: 'auctor vitae, aliquet nec, imperdiet nec,',
              },
              {
                id: 'HHP21MDD9QU',
                value: 7,
                text: 'sed libero. Proin sed turpis nec',
              },
            ]}
          />
        </GridItem>
      </Grid>
    </main>
  )
}

export default Demo
