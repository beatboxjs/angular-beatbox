import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./update.vue";
import { registerMultipleHandlers } from "../../services/events";
import "./update.scss";
import config from "../../config";

@WithRender
@Component({})
export default class Update extends Vue {
	show: boolean = false;

	get appName() {
		return config.appName;
	}

	_unregisterHandlers!: () => void;

	created() {
		this._unregisterHandlers = registerMultipleHandlers({
			"update-available"() {
				this.show = true;
			}
		}, this);
	}

	beforeDestroy() {
		this._unregisterHandlers();
	}

}