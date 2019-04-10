import * as React from 'react';

interface TitleProps {

}

export default class Title extends React.PureComponent<TitleProps, any> {
  public render() {
    console.log("Render title");
    return <h1>Inspiration</h1>
  }
}