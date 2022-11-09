import { App } from 'vue';
import FaBacktop from './components/FaBacktop.vue';
import FaButton from './components/FaButton.vue';
import FaCheckbox from './components/FaCheckbox.vue';
import FaCheckboxGroup from './components/FaCheckboxGroup.vue';
import FaDate from './components/FaDate.vue';
import FaDropdown from './components/FaDropdown.vue';
import FaDropdownItem from './components/FaDropdownItem.vue';
import FaInput from './components/FaInput.vue';
import FaLoading from './components/FaLoading.vue';
import FaMenu from './components/FaMenu.vue';
import FaMenuGroup from './components/FaMenuGroup.vue';
import FaMenuItem from './components/FaMenuItem.vue';
import FaModal from './components/FaModal.vue';
import FaPagination from './components/FaPagination.vue';
import FaPopover from './components/FaPopover.vue';
import FaRadio from './components/FaRadio.vue';
import FaRadioGroup from './components/FaRadioGroup.vue';
import FaSelect from './components/FaSelect.vue';
import FaSkeleton from './components/FaSkeleton.vue';
import FaTable from './components/FaTable.vue';
import FaTableColumn from './components/FaTableColumn.vue';
import FaTabPane from './components/FaTabPane.vue';
import FaTabs from './components/FaTabs.vue';
import FaTextarea from './components/FaTextarea.vue';
import FaFormItem from './components/FaFormItem.vue';

import message from './global/message';
import confirm from './global/confirm';

const components = [
    FaBacktop,
    FaButton,
    FaCheckbox,
    FaCheckboxGroup,
    FaDate,
    FaDropdown,
    FaDropdownItem,
    FaInput,
    FaLoading,
    FaMenu,
    FaMenuGroup,
    FaMenuItem,
    FaModal,
    FaPagination,
    FaPopover,
    FaRadio,
    FaRadioGroup,
    FaSelect,
    FaSkeleton,
    FaTable,
    FaTableColumn,
    FaTabPane,
    FaTabs,
    FaTextarea,
    FaFormItem,
];

export default {
    install(app: App): void {
        components.forEach((com) => {
            app.component(com.name, com);
        });
    },
};

export { message, confirm };
