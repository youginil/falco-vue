### BugBacktop
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|
|target     |string    |N         |""        |Target to get top. the value is a query selector          |
|right      |number    |N         |100       |Right distance to right edge. The unit is px              |
|bottom     |number    |N         |100       |Bottom distance to bottom edge. The unit is px            |

### BugButton
|Prop       |Type          |Required  |Default   |Description                                               |
|-----------|--------------|----------|----------|----------------------------------------------------------|
|type       |enum          |N         |default   |Button type. "default", "primary", "danger", "plain"      |
|disabled   |boolean       |N         |false     |Disabled or not                                           |
|loading    |boolean       |N         |false     |Busy or not                                               |
|width      |string,number |N         |          |Button width. Default width is auto                       |

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|click        |             |Click event                                             |

### BugCheckbox
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|
|label      |string    |N         |""        |Label                                                     |
|disabled   |boolean   |N         |false     |Disabled or not                                           |
|partial    |boolean   |N         |false     |Partial selection                                         |
|block      |boolean   |N         |false     |Block style or not                                        |

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|change       |             |Change event                                            |

### BugCheckboxGroup
|Prop       |Type            |Required  |Default   |Description                                               |
|-----------|----------------|----------|----------|----------------------------------------------------------|
|options    |CheckboxItem[]  |Y         |          |Option list                                               |
|disabled   |boolean         |N         |false     |Disabled or not                                           |
|layout     |enum            |N         |"h"       |Group layout. "h" - horizontal, "v" - vertical            |
|width      |string,number   |N         |          |Checkbox item width                                       |

```
type ValueType = string | number | boolean;
type CheckboxItem = {label: string; value: ValueType};
```

### BugDate
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|
|clearable  |boolean   |N         |true      |Date is clearable or not                                  |

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|change       |             |Change event                                            |

### BugDropdown
|Prop       |Type           |Required  |Default        |Description                                          |
|-----------|---------------|----------|---------------|-----------------------------------------------------|
|position   |string         |N         |bottom-middle  |Dropdown position                                    |
|trigger    |enum           |N         |hover          |Trigger way. "hover", "click"                        |
|width      |string,number  |N         |               |Dropdown size                                        |

|Slot         |Description                                                     |
|-------------|----------------------------------------------------------------|
|default      |Dropdown position                                               |
|dropdown     |Dropdown content                                                |

### BugFormItem
|Prop       |Type           |Required  |Default   |Description                                               |
|-----------|---------------|----------|----------|----------------------------------------------------------|
|layout     |enum           |N         |v         |Layout. "h" - horizontal, "v" - vertical                  |
|label      |string         |N         |          |Text label.                                               |
|labelWidth |string,number  |N         |100       |Label width for horizontal layout                         |
|block      |boolean        |N         |true      |Block style                                               |

|Slot         |Description                                                     |
|-------------|----------------------------------------------------------------|
|default      |Form item body                                                  |
|label        |Complex label rather than text label                            |

### BugInput
|Prop         |Type           |Required  |Default   |Description                                               |
|-------------|---------------|----------|----------|----------------------------------------------------------|
|type         |enum           |N         |text      |Type. "text", "number", "password"                        |
|placeholder  |string         |N         |""        |Placeholder text                                          |
|disabled     |boolean        |N         |false     |Disabled status                                           |
|width        |string,number  |N         |""        |Width                                                     |
|trim         |boolean        |N         |false     |Trim or not                                               |
|clearable    |boolean        |N         |false     |Enable clear button                                       |

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|change       |             |Change event                                            |
|focus        |             |Focus event                                             |
|blur         |             |Blur event                                              |
|enter        |             |When Enter is pressed                                   |

### BugLoading
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|
|tip        |string    |N         |""        |Loaing tip                                                |

### BugModal
|Prop       |Type           |Required  |Default   |Description                                               |
|-----------|---------------|----------|----------|----------------------------------------------------------|
|show       |boolean        |Y         |false     |The variable for controling the modal. v-model:show=""    |
|title      |string         |N         |""        |Modal title                                               |
|headless   |boolean        |N         |false     |Remove title                                              |
|closable   |boolean        |N         |true      |Remove close button                                       |
|width      |string,number  |N         |          |Modal width                                               |

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|show         |             |After shown                                             |
|hide         |             |After hidden                                            |

|Slot         |Description                                                     |
|-------------|----------------------------------------------------------------|
|default      |Modal content                                                   |

### BugPagination
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|
|page       |number    |Y         |          |Current page number                                       |
|pages      |number    |Y         |          |Maximum page number                                       |
|total      |number    |Y         |          |Amount                                                    |

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|change       |number       |When page changed                                       |

### BugPopover
|Prop       |Type      |Required  |Default        |Description                                                  |
|-----------|----------|----------|---------------|-------------------------------------------------------------|
|trigger    |enum      |N         |hover          |Trigger way. "hover", "click"                                |
|position   |string    |N         |bottom-middle  |Popover position. {top|bottom|left|right}-{start|middle|end} |

|Slot         |Description                                                     |
|-------------|----------------------------------------------------------------|
|default      |Popover position                                                |
|pop          |Popover content                                                 |

### BugRadio
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|
|name       |string    |N         |          |Name                                                      |
|label      |string    |N         |""        |Label                                                     |
|disabled   |boolean   |N         |false     |Disabled status                                           |

### BugRadioGroup
|Prop       |Type         |Required  |Default   |Description                                               |
|-----------|-------------|----------|----------|----------------------------------------------------------|
|name       |string       |N         |          |Radio name                                                |
|options    |RadioItem[]  |Y         |          |Radio options                                             |
|disabled   |boolean      |N         |false     |Disabled status                                           |
|layout     |enum         |N         |"h"       |Layout. "h" - horizontal, "v" - vertical                  |

### BugSelect
|Prop       |Type            |Required  |Default   |Description                                               |
|-----------|----------------|----------|----------|----------------------------------------------------------|
|options    |SelectOption[]  |Y         |          |Options                                                   |
|multiple   |boolean         |N         |false     |Multiple selection                                        |
|disabled   |boolean         |N         |false     |Disabled status                                           |
|width      |string,number   |N         |          |Select width                                              |
|placeholder|string          |N         |""        |Placeholder                                               |
|position   |enum            |N         |bottom    |Popup position. "up", "bottom"                            |

```
type SimpleValueType = string | number | boolean;
type ComplexValueType = SimpleValueType[];
type SelectOption = { value: SimpleValueType; label: string };
```

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|change       |             |Selection change                                        |

### BugSkeleton
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|
|layout     |enum      |N         |paragraph |Layout. "paragraph", "table"                              |

### BugTable
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|
|list       |TableList |Y         |          |Table list                                                |
|sort       |OrderBy[] |N         |          |Sort setting                                              |

```
type TableList = Record<string, unknown>[];
type OrderBy = { prop: string; order: 'asc' | 'desc' | '' };
```

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|resort       |             |Sort event                                              |

|Slot         |Description                                                     |
|-------------|----------------------------------------------------------------|
|default      |BugTableColumn collection                                       |


### BugTableColumn
|Prop       |Type           |Required  |Default   |Description                                               |
|-----------|---------------|----------|----------|----------------------------------------------------------|
|label      |string         |N         |""        |Column label                                              |
|prop       |string         |N         |""        |Column property name                                      |
|width      |string,number  |N         |          |Column width                                              |

### BugTabs
|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|
|change       |Key's type   |Tab changed                                             |

|Slot         |Description                                                     |
|-------------|----------------------------------------------------------------|
|default      |Tab panes                                                       |

### BugTabPane
|Prop       |Type           |Required  |Default   |Description                                               |
|-----------|---------------|----------|----------|----------------------------------------------------------|
|key        |string, number |Y         |          |Tab unique key.                                           |

|Slot         |Description                                                     |
|-------------|----------------------------------------------------------------|
|default      |Tab title content                                               |

### BugTextarea
|Prop         |Type      |Required  |Default   |Description                                               |
|-------------|----------|----------|----------|----------------------------------------------------------|
|disabled     |boolean   |N         |false     |Disabled status                                           |
|placeholder  |string    |N         |""        |Placeholder                                               |

### BugMessage
```
import {BugMessage} from 'bugui';

BugMessage.info(text: string, html = false);
BugMessage.warn(text: string, html = false);
BugMessage.error(text: string, html = false);
BugMessage.success(text: string, html = false);
```

### BugConfirm
```
import {BugConfirm} from 'bugui';

BugConfirm(title: string): Promise<void>;
```

<!--
|Prop       |Type      |Required  |Default   |Description                                               |
|-----------|----------|----------|----------|----------------------------------------------------------|

|Event        |Parameter    |Description                                             |
|-------------|-------------|--------------------------------------------------------|

|Slot         |Description                                                     |
|-------------|----------------------------------------------------------------|
-->