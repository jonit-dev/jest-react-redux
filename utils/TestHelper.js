

export default class TestHelper {

  static findByTestAttr = (component, attr) => {
    return component.find(`[data-test="${attr}"]`)
  }



}  
