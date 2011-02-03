<?php

/**
 * Implementation of hook_user_default_permissions().
 */
function code_editor_user_default_permissions() {
  $permissions = array();

  // Exported permission: edit code
  $permissions['edit code'] = array(
    'name' => 'edit code',
    'roles' => array(),
  );

  return $permissions;
}
