<?php

namespace Kainotomo\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VendorRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'currency' => ['required', 'exists:Kainotomo\Models\Commodity,guid'],
            'terms' => ['nullable', 'exists:Kainotomo\Models\Billterm,guid'],
            'taxtable' => ['nullable', 'exists:Kainotomo\Models\Taxtable,guid'],
        ];
    }
}
