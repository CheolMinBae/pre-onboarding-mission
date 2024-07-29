export default function withSearchTimer(Component) {
	return function (props) {
		return <Component {...props} />;
	};
}
