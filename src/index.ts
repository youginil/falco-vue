import { App } from 'vue';
import BugBacktop from './components/BugBacktop.vue';
import BugButton from './components/BugButton.vue';
import BugCheckbox from './components/BugCheckbox.vue';
import BugCheckboxGroup from './components/BugCheckboxGroup.vue';
import BugDate from './components/BugDate.vue';
import BugDropdown from './components/BugDropdown.vue';
import BugDropdownItem from './components/BugDropdownItem.vue';
import BugInput from './components/BugInput.vue';
import BugLoading from './components/BugLoading.vue';
import BugMenu from './components/BugMenu.vue';
import BugMenuGroup from './components/BugMenuGroup.vue';
import BugMenuItem from './components/BugMenuItem.vue';
import BugModal from './components/BugModal.vue';
import BugPagination from './components/BugPagination.vue';
import BugPopover from './components/BugPopover.vue';
import BugRadio from './components/BugRadio.vue';
import BugRadioGroup from './components/BugRadioGroup.vue';
import BugSelect from './components/BugSelect.vue';
import BugSkeleton from './components/BugSkeleton.vue';
import BugTable from './components/BugTable.vue';
import BugTableColumn from './components/BugTableColumn.vue';
import BugTabPane from './components/BugTabPane.vue';
import BugTabs from './components/BugTabs.vue';
import BugTextarea from './components/BugTextarea.vue';
import BugFormItem from './components/BugFormItem.vue';

import message from './global/message';
import confirm from './global/confirm';

const components = [
    BugBacktop,
    BugButton,
    BugCheckbox,
    BugCheckboxGroup,
    BugDate,
    BugDropdown,
    BugDropdownItem,
    BugInput,
    BugLoading,
    BugMenu,
    BugMenuGroup,
    BugMenuItem,
    BugModal,
    BugPagination,
    BugPopover,
    BugRadio,
    BugRadioGroup,
    BugSelect,
    BugSkeleton,
    BugTable,
    BugTableColumn,
    BugTabPane,
    BugTabs,
    BugTextarea,
    BugFormItem,
];

export default {
    install(app: App): void {
        components.forEach((com) => {
            app.component(com.name, com);
        });
    },
};

export { message, confirm };
