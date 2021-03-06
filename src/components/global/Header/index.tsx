import React, { Component } from 'react'
import { myStyle } from './styles'
import { Link } from '../../../../routes/routes'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <header className="header">
                    <div className="container">
                        <div className="header__left">
                            <Link route='/a'>
                                <h1 className="header__icon"><img src="../../../../static/logo.png"/></h1>
                            </Link>
                            <div className="header__search">
                                <input type="text"
                                    placeholder="Busca tus productos favoritos"
                                    className="header__search__field"/>
                            </div>
                        </div>
                    </div>
                </header>
                { this.props.children }

                <style jsx>{myStyle}
                </style>
            </div>
        )
    }
}