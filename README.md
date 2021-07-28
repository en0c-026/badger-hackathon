# Badger Portfolio 

With the retirement of [Sett Vision](https://sett.vision/), a void in user specific reporting has been left for something to fill.  Different user specific metrics are critical for users to track how their deposits are performing and how to best allocate their resources.

The Badger core team has developed an API that is available to consume to provide this information, and is looking for a skilled frontend developer who is proficient in React, Typescript and web3 to develop the Badger Portfolio that will be featured on the main Badger dApp. A design will be provided and specs for the API are documented for reference.

### List of pending features to implement:
- [ ] Units testing coverage 100% | Write tests for all components and the store, with Cypress.
- [ ] web3-react | Add the context to obtain the user's address and be able to make calls with a Web3 Provider.
- [ ] Claim pending rewards | Add the functionality of claiming rewards via button, calling to the Badger Tree contract.
- [ ] Full Chart Functionality | Add the ability to change the timeframe in the charts, show or hide charts according to the selected checkboxes.
- [ ] Asset sections | Sections containing asset data receive fixed data. Update this to work dynamically as information is available from the API.

### Expectations
-	A high quality application is produced using the provided design, flowing with the current design processes in the v2-ui repository
-	100% unit testing coverage
-	Work within the existing tech stack of Badger v2-ui
	-	Language: Typescript
	-	Library: React
	-	Framework: material-ui
	-	State Management: mobx
	-	Web3: web3js

### Documentation
-	Figma Design: [Portfolio](https://www.figma.com/file/RkfjApAEdctYaKT3JgiH1M/Badger-Portfolio?node-id=0%3A1)
-	API Documentation: [Docs](https://docs.badger.finance)
-	API Interface Spec: [Interface](https://github.com/Badger-Finance/badger-api/blob/staging/src/accounts/interfaces/account.interface.ts)
-	Material UI: [Material-UI](https://material-ui.com/getting-started/installation/)
-	MobX: [MobX](https://mobx.js.org/README.html)

## Get Started

Participants can start by forking this repo to their local system, installing and creating a Pull Request when code is ready to be reviewed.

```
git clone https://github.com/Badger-Finance/badger-hackathon.git
git checkout -b badger-portfolio-hackathon
yarn
```

Any further questions can be directed to the [Badger Discord](https://discord.gg/ftKvatzSKA)
