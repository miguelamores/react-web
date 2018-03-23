import React, { Component } from 'react'
import Header from '../src/components/global/Header'
import initStore  from '../src/config/store'
import withRedux from 'next-redux-wrapper'
import { getShows, getShowsSuccess } from '../src/actions/actions'
// import 'rxjs'
// import { toPromise, delay } from 'rxjs/operators'
import  TopSlider  from '../src/components/home/TopSlider/index'
import NoSSR from 'react-no-ssr'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import Loading from '../src/components/global/Loading/Loading'
import { of } from 'rxjs/observable/of'

const lang = 'en'


class App extends Component {
  
  static async getInitialProps({ store, isServer }) {

    // const resultAction = await of(getShows()).toPromise()

    const action = getShows()
    store.dispatch(action)
    // return { isServer }
    

    const translations = await getTranslation(
      lang,
      ['common', 'namespace1'],
      'http://localhost:3000/static/locales/'
    )

    return { translations }
  }

  constructor (props) {
    super(props)

    // this.i18n = startI18n(props.translations, lang)
  }
  
  render () {

    return (
      // <I18nextProvider i18n={this.i18n}>
          <div>
            <Header />
            shows:
            <NoSSR onSSR={<Loading />}>
                <section>
                  <h2>
                    This section is <em>only</em> client-side rendered.
                  </h2>
                </section>
            </NoSSR>
            <TopSlider />

            
          </div>
      // </I18nextProvider>

      
    )
  }

}

const mapStateToProps = (state) => {
  return {
    shows: state.shows
  }
}

export default withRedux(
  initStore,
  null,
  mapStateToProps
)(App) 