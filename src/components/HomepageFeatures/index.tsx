import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


// todo x: 首页内容
const FeatureList: FeatureItem[] = [
  {
    title: 'Geek Clock',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        极客闹钟

        <br />
        支持番茄🍅闹钟, 世界时钟, 灵活设置闹钟.
        <br />
        跨平台, 全平台支持(Windows/MacOS/Linux/iOS/Android)
      </>
    ),
  },
  {
    title: 'Geek Wallet',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        极客钱包
        <br />
        非常智能的钱包
        <br />

      </>
    ),
  },
  {
    title: 'Geek Mind',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        极客笔记工具
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
