// import { ElementArrayFinder, $$, browser, ExpectedConditions } from 'protractor';

// export class HomePage{
//   private get leadsList(): ElementArrayFinder {
//     return $$('.table tbody');
//   }
//   public findingSpecificLeads(name: string): ElementArrayFinder {
//     return this.leadsList.filter((lead) => {
//       return lead.$$('.span')
//         .getText().then((attribute) => {
//           return attribute === name;
//         });
//     });
//   }
//    private changingAsignee(): promise.Promise<void> {
//      for (let i of this.findingSpecificLeads(name)) {
//        await $('.fa-pencil').click();
//        await browser.wait(ExpectedConditions.presenceOf($('#sale-seller')));
//        return this.findingSpecificLeads(name).$()
//      }
//    }
// }