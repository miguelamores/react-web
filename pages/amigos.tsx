import Header from '../src/components/global/Header'
import initStore  from '../src/config/store'
import withRedux from 'next-redux-wrapper'
import {connect} from 'react-redux'

const amigos = ({ shows }) => (
    <Header>
        <div>hola Amigos!</div>
        <div>shows: {shows}</div>
    </Header>
)

const mapStateToProps = (state) => ({
    shows: state.shows
})

export default withRedux(
    initStore,
    null,
    mapStateToProps
)(amigos)





// import { translate } from 'react-i18next'
// export default translate(['common'])((props) => (<h1>{props.t('holaAmigos')}, {props.t('holaAmigos')}</h1>))


