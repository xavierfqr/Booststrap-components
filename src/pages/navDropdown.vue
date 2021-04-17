<template>
  <div>
    <b-dropdown text="Dropdown Button">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>Active Action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled Action</b-dropdown-item>
    </b-dropdown>
    <b-dropdown text="Dropdown Button" :dropleft="true" variant="warning">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>Active Action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled Action</b-dropdown-item>
    </b-dropdown>
    <b-dropdown text="Dropdown Button" :dropright="true" variant="success">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>Active Action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled Action</b-dropdown-item>
    </b-dropdown>
        <b-dropdown text="Dropdown Button" :dropup="true" variant="danger">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>Active Action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled Action</b-dropdown-item>
    </b-dropdown>
    <br/>
    <b-dropdown text="Dropdown Button" :dropdown="true" split variant="danger">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>Active Action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled Action</b-dropdown-item>
    </b-dropdown>
    <b-dropdown text="Dropdown Button" :dropleft="true" split variant="secondary">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>Active Action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled Action</b-dropdown-item>
    </b-dropdown>
        <b-dropdown text="Dropdown Button" :dropright="true" split variant="success">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>Active Action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled Action</b-dropdown-item>
    </b-dropdown>
        <b-dropdown text="Dropdown Button" :dropup="true" split>
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item active>Active Action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled Action</b-dropdown-item>
    </b-dropdown>

  </div>
</template>

<script>

import BDropdown from '../components/b-dropdown.vue';
import BDropdownItem from '../components/b-dropdown-item.vue';
import BDropdownDivider from '../components/b-dropdown-divider.vue';

export default {
  name: 'navDropDown',
  components: {
      BDropdown,
      BDropdownItem,
      BDropdownDivider
  }
}
</script>

<style>
</style>
