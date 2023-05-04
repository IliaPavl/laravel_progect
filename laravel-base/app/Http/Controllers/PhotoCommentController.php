<?php

namespace App\Http\Controllers;

use App\Models\PhotosComments;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePhotosCommentsRequest;
use App\Http\Requests\UpdatePhotosCommentsRequest;

class PhotoCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePhotosCommentsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePhotosCommentsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PhotosComments  $photosComments
     * @return \Illuminate\Http\Response
     */
    public function show(PhotosComments $photosComments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePhotosCommentsRequest  $request
     * @param  \App\Models\PhotosComments  $photosComments
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePhotosCommentsRequest $request, PhotosComments $photosComments)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PhotosComments  $photosComments
     * @return \Illuminate\Http\Response
     */
    public function destroy(PhotosComments $photosComments)
    {
        //
    }
}
