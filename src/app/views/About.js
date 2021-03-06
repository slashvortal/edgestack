import React from "react"
import Helmet from "react-helmet"
import { connect } from "react-redux"
import markdown from "markdown-in-js"
import { FormattedDate, FormattedMessage, FormattedRelative } from "react-intl"
import { addDays } from "date-fns"

import Styles from "./About.css"
import { getCounter, decrementCounter, incrementCounter, loadCounter } from "../modules/CounterModule"

/**
 * @deprecated
 */
function handleOldMethodCall() {
  // nothing to do
}

class About extends React.Component {
  componentDidMount() {
    // Good strategy to load relevant data: wait after rendering
    // so that the user sees the empty state. We can't really wait
    // in render sequence for any data coming in.
    return this.props.value == null ? this.props.load() : null
  }

  fetchData()
  {
    // Load data on all preparation steps e.g. on SSR and also on rehydration on client
    // when intially loading this route.
    return this.props.value == null ? this.props.load() : null
  }

  render() {
    const { intl } = this.props

    return (
      <article>
        <Helmet title={intl.formatMessage({ id: "title" })}/>
        <p>
          <FormattedMessage id="counter" values={{ value: this.props.value }}/>
        </p>
        <p>
          <FormattedMessage id="infoPi" values={{ pi: 3.14159265359 }}/>
        </p>

        <p>
          Today: <br/>
          <FormattedDate
            value={Date.now()}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </p>
        <p>
          Yesterday:<br/>
          <FormattedRelative value={addDays(Date.now(), -1)}/>
        </p>

        <p>
          <button className={Styles.button} onClick={this.props.handleDecrement}>Decrement</button>
          &#160;
          <button className={Styles.button} onClick={this.props.handleIncrement}>Increment</button>
          &#160;
          <button className={Styles.button} onClick={handleOldMethodCall}>Deprecated Test</button>
        </p>

        {markdown`Markdown in React is **pretty useful**.`}

        <p className={Styles.intro}>
          <a href="https://github.com/sebastian-software">Produced with ❤ by Sebastian Software</a>
        </p>
      </article>
    )
  }
}

About.propTypes = {
  intl: React.PropTypes.object,
  value: React.PropTypes.number,
  load: React.PropTypes.func,
  handleIncrement: React.PropTypes.func,
  handleDecrement: React.PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
  value: getCounter(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleIncrement: () => dispatch(incrementCounter()),
  handleDecrement: () => dispatch(decrementCounter()),
  load: () => dispatch(loadCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
