import React, { Component } from 'react'
import Header from '../src/components/global/Header'
import initStore  from '../src/config/store'
import withRedux from 'next-redux-wrapper'
import { getShows } from '../src/actions/actions'
import 'rxjs'
// import { toPromise, delay } from 'rxjs/operators'
import  TopSlider  from '../src/components/home/TopSlider/index'
import NoSSR from 'react-no-ssr'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import Loading from '../src/components/global/Loading/Loading'

const lang = 'en'


class App extends Component {
  
  static async getInitialProps() {
    /* onst action = getShows()
    store.dispatch(action)
    console.log('SHOWS-------------------')
    console.log(store.getState().shows)
    return { shows: store.getState().shows } */

    const translations = await getTranslation(
      lang,
      ['common', 'namespace1'],
      'http://localhost:3000/static/locales/'
    )

    return { translations }
  }

  constructor (props) {
    super(props)

    //this.i18n = startI18n(props.translations, lang)
  }
  
  render () {

    return (
      /* <I18nextProvider i18n={this.i18n}>
        
      </I18nextProvider> */

      <div>
        <Header />
        <NoSSR onSSR={<Loading />}>
            <section>
              <h2>
                This section is <em>only</em> client-side rendered.
              </h2>
            </section>
      </NoSSR>
        <TopSlider />

        
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log('MAPSTATE----------')
  console.log(state)
  return {
    shows: state.shows
  }
}

export default withRedux(
  initStore,
  null,
  mapStateToProps
)(App) 