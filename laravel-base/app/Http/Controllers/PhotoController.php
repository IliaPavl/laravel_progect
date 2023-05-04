<?php

namespace App\Http\Controllers;

use App\Models\Photos;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $user=$request->user();
        // return Photos::where('user_id',$user->id)->paginate();
        return Photos::all();
    }

    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'lat' => 'required|numeric|min:-90|max:90',
            'lng' => 'required|numeric|min:-180|max:180',
            'user_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        //тут происходит ошибка ели вернуть $request то видно что url: {} - пустой объект 
        // return response($request);
        $filename = $request->file->getClientOriginalName();
        $request->file->move(public_path('images'), $filename);
        $photos = Photos::create([
            'url' => $request['file'],
            'lat' => $request['lat'],
            'lng' => $request['lng'],
            'user_id' => $request['user_id'],
        ]);
        return response($photos);
    }

    public function show(Photos $photos, Request $request)
    {
        // $user=$request->user();
        // if($user->id !== $photos->user_id){
        //     return abort(403,"Unauthorized action");
        // }
        return response($photos);
    }

    public function update(Request $request, Photos $photos)
    {
        $photos->update($request->validated());
        return response($photos);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Photos $photos, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $photos->user_id) {
            return abort(403, "Unauthorized action");
        }
        $photos->delete();
        return response("", 204);
    }
}