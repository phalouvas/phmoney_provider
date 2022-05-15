<?php

namespace Kainotomo\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaxtableEntryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'taxtable' => ['required', 'exists:Kainotomo\Models\Taxtable,guid'],
            'account' => ['required', 'exists:Kainotomo\Models\Account,guid'],
            'amount_num' => ['required', 'integer'],
            'amount_denom' => ['required', 'integer'],
            'type' => ['required', 'integer'],
        ];
    }
}