<?php

namespace Drupal\bitconverter\Form;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\HtmlCommand;
/**
 * Implementing a ajax form.
 */
class ConveriosnForm extends FormBase {
/**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'ajax_example_simplest';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['amount'] = [
        '#type' => 'textfield',
        '#placeholder' => t('Enter Amount'),
        '#ajax' => [
            'callback' => '::promptCallback',
            'event' => 'keyup',
            'wrapper' => 'textfields-container',
            'progress' => [
            'type' => 'throbber',
            'message' => t('Verifying entry...'),
            ],
        ],
    ];

    $form['type_options1'] = [
      '#type' => 'select',
      '#options' => array('BITCOIN(BTC)' => t('BITCOIN(BTC)'),
                          'BITCOINCASH(BCH)' => t('BITCOIN CASH(BCH)')),
          '#value' => $this->t('BITCOIN(BTS)'),
    ];

    $form['textfields_container'] = [
      '#type' => 'container',
      '#attributes' => ['id' => 'textfields-container'],
  ];

    $form['textfields_container']['display_amount'] = [
        '#type' => 'textfield',
        '#placeholder' => t('Enter Amount'),
    ];

      $form['type_options2'] = [
        '#type' => 'select',
        '#options' => array('USDOLLAR(USD)' => t('US DOLLAR(USD)'),
                           'INDIA(RS)' => t('INDIA(RS)')),
            '#value' => $this->t('INDIA(RS)'),
      ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // No-op. Our form doesn't need a submit handler, because the form is never
    // submitted. We add the method here so we fulfill FormInterface.
  }

  /**
   * Handles switching the available regions based on the selected theme.
   */
  public function promptCallback($form, FormStateInterface $form_state) {
    $form['textfields_container']['display_amount']['#value'] = $form_state->getValue('amount');
    return $form['textfields_container'];
  }
}