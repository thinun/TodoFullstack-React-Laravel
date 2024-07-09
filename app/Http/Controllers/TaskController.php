<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data =$request->validate([
            'task' => 'required',
            'description'=>'nullable',
            'date'=>'required',
        ]);
        $task =Task::create($data);

        return response(new $task,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return $task;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
       $data =$request->validate([
           'task' => 'required',
           'description'=>'nullable',
           'date'=>'required',
           'completed'=>'boolean'
       ]);
       $task->update($data);
       return response(new $task,201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return response(null, 204);
    }
}
