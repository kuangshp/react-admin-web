import React from 'react';

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

type Props = React.PropsWithChildren<{ fallbackRender: FallbackRender }>;
type State = { error: Error | null };
// https://www.npmjs.com/package/react-error-boundary(别人实现的包)
export class ErrorBoundary extends React.Component<Props, State> {
  state = { error: null };

  // 当子组件抛出异常，这里会接收到并且调用
  // eslint-disable-next-line
  static getDerivedStateFromError(error: Error) {
    console.log('错误了');
    return { error };
  }
  // eslint-disable-next-line
  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
