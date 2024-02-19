import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useHistory, useLocation } from '@docusaurus/router';

const FeatureList = [
  {
    title: 'Responsive Design',
    Svg: require('@site/static/svg/waterfall.svg').default,
    description: (
      <>
        Focus on what matters and get things done quicker with our low-profile
        layout, designed to minimize the steps between A and B so <b>you stay <em>flowing</em></b>.
      </>
    ),
  },
  {
    title: 'Integrated Experience',
    Svg: require('@site/static/svg/fields.svg').default,
    description: (
      <>
        MonkeyPaste was designed from the ground up to <b><em>evolve</em> your clipboard </b>
        into a vault for your bookmarks, notes and much more.
      </>
    ),
  },
  {
    title: 'Extensible Environment',
    Svg: require('@site/static/svg/trees.svg').default,
    description: (
      <>
        <b>Built to <em>grow</em></b> using a simple plugin system that allows developers
        to <a href="./docs/plugins/plugin-development">easily extend</a> and users to pick the features they want with point-and-click ease.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

