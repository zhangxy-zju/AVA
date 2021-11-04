import { Advisor } from '@antv/chart-advisor';
// import { specToG6Config, specToG6Plot } from '@antv/antv-spec';

// Prepare tabular data that describe relations: each row of data represents an edge
const euroCreditData = [
  { Creditor: 'France', Debtor: 'Italy', Amount: 366, Risk: 'High Risk' },
  { Creditor: 'Britain', Debtor: 'United States', Amount: 345, Risk: 'Stable' },
  { Creditor: 'Spain', Debtor: 'Britain', Amount: 326, Risk: 'Stable' },
  { Creditor: 'Germany', Debtor: 'United States', Amount: 324, Risk: 'Stable' },
  { Creditor: 'France', Debtor: 'United States', Amount: 322, Risk: 'Stable' },
  { Creditor: 'Germany', Debtor: 'Britain', Amount: 321, Risk: 'Stable' },
  { Creditor: 'Spain', Debtor: 'United States', Amount: 163, Risk: 'Stable' },
  { Creditor: 'France', Debtor: 'Spain', Amount: 118, Risk: 'Medium Risk' },
  { Creditor: 'Italy', Debtor: 'Germany', Amount: 111, Risk: 'Stable' },
  { Creditor: 'Japan', Debtor: 'Germany', Amount: 88.5, Risk: 'Stable' },
  { Creditor: 'Spain', Debtor: 'Portugal', Amount: 62, Risk: 'High Risk' },
  { Creditor: 'Germany', Debtor: 'Spain', Amount: 57.6, Risk: 'Medium Risk' },
  { Creditor: 'France', Debtor: 'Greece', Amount: 53.9, Risk: 'High Risk' },
  { Creditor: 'France', Debtor: 'Germany', Amount: 53.8, Risk: 'Stable' },
  { Creditor: 'Germany', Debtor: 'Ireland', Amount: 48.9, Risk: 'High Risk' },
  { Creditor: 'Japan', Debtor: 'Italy', Amount: 38.8, Risk: 'High Risk' },
  { Creditor: 'Germany', Debtor: 'Portugal', Amount: 32.5, Risk: 'High Risk' },
  { Creditor: 'Japan', Debtor: 'Britain', Amount: 28.2, Risk: 'Stable' },
  { Creditor: 'Britain', Debtor: 'Italy', Amount: 26, Risk: 'High Risk' },
  { Creditor: 'Japan', Debtor: 'Spain', Amount: 25.9, Risk: 'Medium Risk' },
  { Creditor: 'Britain', Debtor: 'France', Amount: 22.4, Risk: 'Low Risk' },
  { Creditor: 'Britain', Debtor: 'Portugal', Amount: 19.4, Risk: 'High Risk' },
  { Creditor: 'Germany', Debtor: 'Greece', Amount: 19.3, Risk: 'High Risk' },
  { Creditor: 'Japan', Debtor: 'Ireland', Amount: 18.9, Risk: 'High Risk' },
  { Creditor: 'France', Debtor: 'Portugal', Amount: 18.3, Risk: 'High Risk' },
  { Creditor: 'France', Debtor: 'Ireland', Amount: 17.3, Risk: 'High Risk' },
  { Creditor: 'Ireland', Debtor: 'Britain', Amount: 12, Risk: 'Stable' },
  { Creditor: 'United States', Debtor: 'Ireland', Amount: 11.1, Risk: 'High Risk' },
  { Creditor: 'Portugal', Debtor: 'Greece', Amount: 10.1, Risk: 'High Risk' },
  { Creditor: 'Spain', Debtor: 'Italy', Amount: 9.79, Risk: 'High Risk' },
  { Creditor: 'France', Debtor: 'Japan', Amount: 7.73, Risk: 'Stable' },
  { Creditor: 'Ireland', Debtor: 'Spain', Amount: 6.38, Risk: 'Medium Risk' },
  { Creditor: 'Portugal', Debtor: 'Ireland', Amount: 3.77, Risk: 'High Risk' },
  { Creditor: 'Italy', Debtor: 'Greece', Amount: 3.22, Risk: 'High Risk' },
  { Creditor: 'United States', Debtor: 'Italy', Amount: 3.16, Risk: 'High Risk' },
  { Creditor: 'United States', Debtor: 'Greece', Amount: 3.1, Risk: 'High Risk' },
  { Creditor: 'Italy', Debtor: 'Ireland', Amount: 2.83, Risk: 'High Risk' },
  { Creditor: 'Japan', Debtor: 'Portugal', Amount: 2.18, Risk: 'High Risk' },
  { Creditor: 'Japan', Debtor: 'Greece', Amount: 1.37, Risk: 'High Risk' },
  { Creditor: 'Italy', Debtor: 'Portugal', Amount: 0.87, Risk: 'High Risk' },
  { Creditor: 'Spain', Debtor: 'Greece', Amount: 0.78, Risk: 'High Risk' },
  { Creditor: 'Britain', Debtor: 'Greece', Amount: 0.55, Risk: 'High Risk' },
  { Creditor: 'Portugal', Debtor: 'United States', Amount: 0.52, Risk: 'Stable' },
  { Creditor: 'Ireland', Debtor: 'Greece', Amount: 0.34, Risk: 'High Risk' },
];

// specify which fields are used for source and target
const extra = {
  sourceKey: 'Creditor',
  targetKey: 'Debtor',
};

// Initialize an advisor and pass the data to its advise function
const myAdvisor = new Advisor();
const advices = myAdvisor.advise({ data: euroCreditData, options: { extra } });

// The advices are returns in order from largest score to smallest score, you can choose the best advice to generate visualization
const bestAdvice = advices[0];
if (bestAdvice) {
  const { spec } = bestAdvice;
  const container = document.getElementById('container');
  window.g6Utils.specToG6Plot(spec, container);
}
