<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class NotificationApiController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return response()->json([
            'total' => $user->notifications->whereNull('read_at')->count(),
            'data' => $user->notifications()->orderBy('read_at')->orderBy('created_at', 'desc')->get(),
            'user_id' => $user->id,
        ]);
    }

    public function update(Notification $notification)
    {
        $notification->update([
            'read_at' => Carbon::now()
        ]);

        return response()->json();
    }
}
