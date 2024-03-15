function jsCondition() {
  return dataLayer.some(({event, productKey}) => {
    return event == 'productIdentification' && productKey == 'DTC';
  })
}
